import React from "react";
import Table from "../../Common/Table"
import Card from "../../Common/Card";
import Header from "../../Common/Header";


function Teacher(){
    return (<React.Fragment>
        <Header>
        <Card 
             head="TOTAL STUDENTS"
             value="179"
             icon="music-black-vertical-bars"
             b1=""
             b2=""
             color="#11CDE"
        />
        <Card
            head="PENDING ASSIGNMENT"
            value="0"
            icon="music-black-vertical-bars"
            b1=""
            b2=""
            color="#11CDE"
        />
        <Card
            head="TOTAL SECTION"
            value="4"
            icon="music-black-vertical-bars"
            b1=""
            b2=""
            color="#11CDE"
        />
        <Card
            head="TOTAL COURSE"
            value="0"
            icon="music-black-vertical-bars"
            b1=""
            b2=""
            color="#11CDE"
        />
        </Header>
        
    
    </React.Fragment>);


}
export default Teacher;