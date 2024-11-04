
import React from "react";
import TablaShedule from './TablaSchedule'
import TablaActivitiesSecond from './TableActivitiesSecond'

function SectionSchedule() {

    return (
        <>
            <div style={{backgroundColor: "#222222", height: "min(400px, 100%)", paddingTop: "50px", padding: "20px", display: "flex", gap: "10px"}}> 
                <TablaShedule />
                <TablaActivitiesSecond/>
            </div>
        </>
    )
}

export default SectionSchedule;