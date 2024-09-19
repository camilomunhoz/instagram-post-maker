const template = data => `
    <div class="instagram-card" data-language="${data.language}" data-n-classes="${data.nClasses}">
        <div class="header">
            <span class="title">
                ${data.courseName}
            </span>
        </div>
        <div class="body n-classes--${data.length}">
            ${data.content}
        </div>
    </div>
`

export default template