export class miscFunctions{

    public getWeekNumber(date: string): number {    
 
        let dateNumbers = date.split('-');
        let currentDate = new Date(+dateNumbers[0],+dateNumbers[1] - 1,+dateNumbers[2]);
       
        let oneJan = new Date(currentDate.getFullYear(),0,1)
        let days = Math.floor((+currentDate - +oneJan) / (24 * 60 * 60 * 1000))
        let weekNumber = Math.ceil((currentDate.getDay() + 1 + days) / 7)
        
       return weekNumber;
    }
    
}