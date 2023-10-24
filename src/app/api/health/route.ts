// import the Request and Response classes
import { NextResponse, NextRequest } from "next/server";

// import mysql2/promise for mysql connectivity
import mysql from 'mysql2/promise';

// import GetDBSettings to retrieve the database connection environment parameters,
// and the IDBSettings object interface
import { GetDBSettings, IDBSettings } from '@/sharedCode/common';
import { error } from "console";

// 1. populate the connection parameters
let connectionParams: IDBSettings = GetDBSettings();


// define and export the GET handler function
export async function GET(request: NextRequest) {
    let checkType = "";

    try {
        checkType = request.nextUrl!.searchParams!.get('check')!;

        if(checkType == 'general') {
            return NextResponse.json({ healthCheck: "General", apiStatus: "Working Fine." });
        }

        if(checkType == 'database') {
            const connection = await mysql.createConnection(connectionParams);
                      
            connection.end();
            return NextResponse.json({ healthCheck: "Database", apiStatus: "Working Fine." });
            
        }
       
       

       
    } catch (err) {
        console.log('ERROR: API - ', (err as Error));
        
        const response = { healthCheck: checkType, apiStatus: (err as Error) }
        
        return NextResponse.json(response, { status: 500 });
    }
  
}