const content = data => `
    <div class="save-the-date">
        <div class="top-element">${data.classes[0].startDate} - ${data.classes[0].endDate}</div>
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
                <div class="label">PROFESSOR(A) BOLSISTA</div>
                <div class="teacher">${data.classes[0].teacher}</div>
            </div>
        </div>
    </div>
`

export default content