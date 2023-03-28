function dayOfYear(date){
    const currdate = new Date(date)
    const firstDayOfYear = new Date(`01/01/${currdate.getFullYear()}`)
    
    return (currdate - firstDayOfYear) /( 24 * 3600 *1000) + 1
}
console.log(dayOfYear("1/2/2019"));