import { useEffect, useState } from "react";

export function useListOfYears() {
    const [listOfYears, setListOfYears] = useState<number[]>([])
    const currentYear = new Date().getFullYear();


    useEffect(() => {
        function getListOfYears() {
            let years: number[] = [];
            for (let year = 2009; year <= currentYear; year++) {
                years.push(year)
            }
            setListOfYears(years)
        }
        getListOfYears()
    }, [])

    return listOfYears;
}