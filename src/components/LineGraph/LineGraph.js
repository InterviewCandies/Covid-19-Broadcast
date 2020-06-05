import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { GLOBAL_HISTORY_URL } from '../../api/api'
import { useTranslation } from 'react-i18next'
const LineGraph = () => {
    const [ globalHistory, setGlobalHistory ] = useState({});
    const { t } = useTranslation();
    useEffect(() => {
        async function fetchGlobalHistory () {
            try {
                const result = await fetch(GLOBAL_HISTORY_URL);
                const history = await result.json();
                setGlobalHistory({...history});
            }
            catch (error){
                console.log(error);
            }
        }
        fetchGlobalHistory();
    },[])
    const convertData = obj => {
        let list = [];
        Object.keys(obj).forEach(key => {
            list.push({x: key, y: obj[key]});
        })
        return list;
    }
    let data = {};
    if (Object.keys(globalHistory).length !== 0) {
        data = {
            labels: Object.keys(globalHistory["cases"]),
            datasets: [{
                label: t("confirmed"),
                data : convertData(globalHistory["cases"]),
                backgroundColor : "blue"
            }, 
            {
                label: t("deaths"),
                data : convertData(globalHistory["deaths"]),
                backgroundColor : "red"
            },
            {
                label: t("recovered"),
                data : convertData(globalHistory["recovered"]),
                backgroundColor : "green"
            }
        ]
        }
    }
    return (
        <div style={{width:"100%"}}>
            <h5>{t("globalTimeline")}</h5>
            <Line data={data} options={{ responsive : true, elements : { line : {fill : false}}, legend : { labels : { usePointStyle : true}}}}></Line>
        </div>
    )
}

export default LineGraph