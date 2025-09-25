const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService{
     constructor(problemRepository)
     {
        this.problemRepository=problemRepository;
     }
     async createProblem(problemData)
     {          
          //1.Sanitize the markdown fro description
        problemData.description=sanitizeMarkdownContent(problemData.description);
        console.log("problemData",problemData);
        const problem=await this.problemRepository.createProblem(problemData);
        console.log("problem",problem);
        return problem;      
     }
     async getAllProblems()
     {
      const problems=await this.problemRepository.getAllProblems();
      return problems;
     }
}
module.exports=ProblemService;