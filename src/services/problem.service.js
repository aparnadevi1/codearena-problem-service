const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService{
     constructor(problemRepository)
     {
        this.problemRepository=problemRepository;
     }
     async createProblem(problemData)
     {  
        try{
             
          //1.Sanitize the markdown fro description
        problemData.description=sanitizeMarkdownContent(problemData.description);
        console.log("problemData",problemData);
        const problem=await this.problemRepository.createProblem(problemData);
        console.log("problem",problem);
        return problem;
        }
        catch(error)
        {
              console.log(error);
              throw error;
        }
       
     }
}
module.exports=ProblemService;