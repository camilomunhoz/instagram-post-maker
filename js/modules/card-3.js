let i = 0;
const content = data => data.classes.reduce((acc, _class) => acc += card(_class, ++i), "")

function card(info, i) {
    return `
        <div class="card">
            <div class="top-element">
                <div>
                    <span>TURMA ${i}</span>
                    <div class="modality">${info.modality}</div>
                </div>
                <div>
                    <div class="level">${info.level}</div>
                </div>
            </div>
            <div class="more-info">
                <div class="date-time">
                    <div class="weekday">${info.weekday}</div>
                    <div class="time">${info.startTime} - ${info.endTime}</div>
                </div>
                <div class="group-teacher">
                    <div class="label">PROFESSOR(A) BOLSISTA</div>
                    <div class="teacher">${info.teacher}</div>
                </div>
            </div>
        </div>
    `
}

export default content
