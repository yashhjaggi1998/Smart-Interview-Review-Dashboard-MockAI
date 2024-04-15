import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const interviewData = {
        Result : "Leaning Hire",
        Position: "Full-Stack Engineer (NextJS)",
        User: "Yashh Jaggi",
        Date: new Date().toDateString(),
        TimeTaken: "1 hour 30 minutes",
        PercentileData: {
            CandidateScore: 4.0,
            TotalUsers: 50,
            UserDistribution: [
                { Percentile: "0 - 1", UserCount: 5, UpperPercentileBucket: 10, LowerPercentileBucket: 0, isUser: false },
                { Percentile: "1 - 2", UserCount: 15, UpperPercentileBucket: 40, LowerPercentileBucket: 11, isUser: false },
                { Percentile: "2 - 3", UserCount: 20, UpperPercentileBucket: 70, LowerPercentileBucket: 41, isUser: false },
                { Percentile: "3 - 4", UserCount: 7, UpperPercentileBucket: 94, LowerPercentileBucket: 71, isUser: true,},
                { Percentile: "4 - 5", UserCount: 3, UpperPercentileBucket: 100, LowerPercentileBucket: 95, isUser: false },
            ]
        },
        "Segments": [
            {
                Skill: "Problem Solving", 
                Rating: 4.0, 
                AveragePastRating: 2.0, 
                Description: "The candidate displayed excellent problem-solving skills. They approached the problem methodically, considering different cases such as word length and identical characters. The candidate asked clarifying questions and was able to extend their solution to handle edge cases effectively.", 
                Suggestion: "We suggest to keep practicing, keep impressing.", 
                positiveSuggestionKeywords: ['excellent', 'problem-solving', 'methodically,', 'asked', 'clarifying', 'questions', 'handle','edge', 'cases', 'effectively'], 
                negativeSuggestionKeywords: [], 
                QuickSuggestion: "We suggest to keep practicing, keep impressing.",
                audioSrc: "AudioRecordings/Problem_Solving_Audio.mp3",
            },
            {
                Skill: "Algorithms", 
                Rating: 3.0, 
                AveragePastRating: 4.0, 
                Description: "The candidate demonstrated a good understanding of using a hash table to optimize the search for complement numbers, which shows a solid grasp of data structures and their applications. However, there was a repetition in explaining the approach without considering alternative algorithms or optimizations beyond the initial solution.", 
                Suggestion: "You might want to experiment with different algorithms while practicing. Also, consider optimizing your code further if there's room for improvement.", 
                positiveSuggestionKeywords: ['good', 'understanding', 'using', 'hash', 'table', 'solid', 'grasp', 'data', 'structures'], 
                negativeSuggestionKeywords: ['without', 'considering' ,'alternative', 'algorithms', 'optimizations', 'beyond', 'initial', 'solution'], 
                QuickSuggestion: "Consider experimenting with various algorithms while practicing and optimize your code further if possible.",
                audioSrc: "AudioRecordings/Algorithms_Audio.mp3",
            },
            {
                Skill: "Data Structures", 
                Rating: 4.0, 
                AveragePastRating: 3.0, 
                Description: "Your use of a hash table to optimize the search for complement numbers showcased a solid grasp of data structures and their applications. Your coding solution was functional and effectively utilized a hash table.", 
                Suggestion: "Apply hash tables to diverse problems and keep refining your understanding of data structures.", 
                positiveSuggestionKeywords: ['solid', 'grasp', 'data', 'structures', 'solution', 'functional', 'effectively', 'utilized', 'hash', 'table'], 
                negativeSuggestionKeywords: [], 
                QuickSuggestion: "Apply hash tables to solve a variety of problems while continuously refining your grasp of data structures.",
                audioSrc: "AudioRecordings/Data_Structures_Audio.mp3",
            },
            {
                Skill: "Coding", 
                Rating: 4.0, 
                AveragePastRating: 4.0, 
                Description: "The candidate wrote clean, working code with no syntax errors. Their code was well-structured, making good use of data structures (a hash map) to map the alien language order. The solution was implemented efficiently, showing a strong understanding of the chosen programming language paradigms.", 
                Suggestion: "We are impressed with your coding skills and urge you to continue doing what you do." , 
                positiveSuggestionKeywords: ['clean,', 'working', 'code', 'no', 'syntax', 'errors.', 'strong', 'understanding',  'chosen', 'programming'], 
                negativeSuggestionKeywords: [], 
                QuickSuggestion: "We are impressed with your coding skills and urge you to continue doing what you do.",
                audioSrc: "AudioRecordings/Coding_Audio.mp3",
            },
            {
                Skill: "Complexity Analysis", 
                Rating: 1.0, 
                AveragePastRating: 3.0, 
                Description: "The candidate seemed unsure about how to determine the space complexity of algorithms, often providing vague or incorrect estimates without considering factors like data structures, auxiliary space, or recursive calls. Similarly, when asked about time complexity, they struggled to give precise Big O notation or analyze the time complexity of algorithms accurately. They lacked a systematic approach to breaking down the operations and evaluating their efficiency.", 
                Suggestion: "We suggest you to revisit to revisit the fundamentals of space and time complexity analysis. This includes understanding different data structures' space requirements, recognizing auxiliary space usage, and time complexity of recursive calls. Practice breaking down algorithms into individual operations and analyzing their efficiency to determine the overall complexity. Additionally, consider studying common time and space complexity classes like O(1), O(n), O(log n), etc., and how they apply to different algorithms.", 
                positiveSuggestionKeywords: [], 
                negativeSuggestionKeywords: ['unsure', 'providing', 'vague', 'incorrect', 'estimates', 'struggled', 'to', 'give', 'precise', 'big', 'oh', 'notation', 'lacked', 'systematic' , 'approach'], 
                QuickSuggestion: "Revisit space-time complexity basics, analyze algorithm efficiency, study common complexity classes.",
                audioSrc: "AudioRecordings/Complexity_Analysis_Audio.mp3",
            },
            {
                Skill: "Communication", 
                Rating: 2.0, 
                AveragePastRating: 2.0, 
                Description: "The candidate communicated their thought process and approach to solving the problem. However, there were instances where the explanations were unclear or repetitive. The candidate needed some guidance and clarification from the interviewer to proceed, indicating room for improvement in clear and concise communication.", 
                Suggestion: "Practice clear and concise explanations to improve your communication skills. Seek feedback from others to refine your communication style and actively listen for better understanding. Engaging in activities like mock interviews or public speaking can help you practice and master these skills effectively.", 
                positiveSuggestionKeywords: [], 
                negativeSuggestionKeywords: ['explanations', 'unclear', 'repetitive', 'needed', 'guidance'], 
                QuickSuggestion: "Practice concise explanations, seek feedback for communication improvement, actively listen, and engage in relevant activities.",
                
            },
        ],
    }
  
    res.status(200).json(interviewData);
}