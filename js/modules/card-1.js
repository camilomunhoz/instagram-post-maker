const content = data => `
    <div class="save-the-date">
        <div class="top-element">
        
            <svg class="ring" width="64" height="93" viewBox="0 0 64 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32.0001" cy="80.6841" r="11.8421" fill="#001C2E"/>
                <path d="M32 80.6841C18.1927 80.6841 7 64.1896 7 43.842" stroke="#001C2E" stroke-width="13"/>
                <path class="ring-top" d="M7 43.8421C7 23.4945 18.1927 7 32 7C45.8073 7 57 23.4945 57 43.8421" stroke="grey" stroke-width="13"/>
            </svg>
            
            <svg class="ring" width="64" height="93" viewBox="0 0 64 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32.0001" cy="80.6841" r="11.8421" fill="#001C2E"/>
                <path d="M32 80.6841C18.1927 80.6841 7 64.1896 7 43.842" stroke="#001C2E" stroke-width="13"/>
                <path class="ring-top" d="M7 43.8421C7 23.4945 18.1927 7 32 7C45.8073 7 57 23.4945 57 43.8421" stroke="grey" stroke-width="13"/>
            </svg>
    
            <span>${data.classes[0].startDate} - ${data.classes[0].endDate}</span>
        </div>
        
        <div class="date-time">
            <div>
                <div class="weekday">${data.classes[0].weekday}</div>
                <div class="time">${data.classes[0].startTime} - ${data.classes[0].endTime}</div>
            </div>
        </div>
    </div>

    <div class="more-info">
        <div class="left-info">
            <div class="group">
                <div class="label">MODALIDADE</div>
                <div class="modality">${data.classes[0].modality}</div>
            </div>
        </div>
        <div class="right-info">
            <div class="group">
                <div class="label">NÍVEL</div>
                <div class="level">${data.classes[0].level}</div>
            </div>
            <div class="group">
                <div class="label">${data.classes[0].teacherLabel || "PROFESSOR(A) BOLSISTA"}</div>
                <div class="teacher">${data.classes[0].teacher}</div>
            </div>
        </div>
    </div>
`

export default content