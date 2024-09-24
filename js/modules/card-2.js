const content = data => data.classes.reduce((acc, _class) => acc += card(_class), "")

function card(info) {
    return `
        <div class="card">
            <div class="top-element">
                TURMA X
            </div>
            <div class="date-time">
                <div>
                    <div class="weekday">${info.weekday}</div>
                    <div class="time">${info.startTime} - ${info.endTime}</div>
                    <div class="modality">${info.modality}</div>
                </div>
            </div>
            <div class="group-level">
                <div class="label">NÍVEL</div>
                <div class="level" style="font-size: ${20 - (info.level.length * 0.09) * (info.level.length * 0.09)}px">
                    ${info.level}
                </div>
            </div>
            <div class="group-teacher">
                <div class="label">PROFESSOR(A) BOLSISTA</div>
                <div class="teacher">${info.teacher}</div>
            </div>
        </div>
    `
}

export default content
