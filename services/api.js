import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://gfzaonjpwcwoturnauda.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmemFvbmpwd2N3b3R1cm5hdWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNjg5MzQsImV4cCI6MjA3MTY0NDkzNH0.4G5ieda5n2FT_Sgr75tAHNRtRCnYryNwgedMmfmzTHY",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmemFvbmpwd2N3b3R1cm5hdWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNjg5MzQsImV4cCI6MjA3MTY0NDkzNH0.4G5ieda5n2FT_Sgr75tAHNRtRCnYryNwgedMmfmzTHY"
    }
})