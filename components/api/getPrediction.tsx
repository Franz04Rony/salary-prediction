export const getPrediction = async(year: number, job: any, exp: any, mode: any) => {
    const data:any = await fetch(`https://salary-predictor-api.onrender.com/api/?year=${year}&job=${job[0]}&job=${job[1]}&job=${job[2]}&job=${job[3]}&job=${job[4]}&job=${job[5]}&job=${job[6]}&job=${job[7]}&job=${job[8]}&job=${job[9]}&exp=${exp[0]}&exp=${exp[1]}&exp=${exp[2]}&exp=${exp[3]}&mode=${mode[0]}&mode=${mode[1]}&mode=${mode[2]}`)
    .then( res => res.json() )
    return data
}