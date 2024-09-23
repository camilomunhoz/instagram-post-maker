const template = data => `
    <div class="instagram-card" data-language="${data.language}" data-n-classes="${data.nClasses}">
        <div class="header">
            <span class="title">
                ${data.courseName}
            </span>
        </div>
        <div class="body n-classes--${data.nClasses}">
            <div class="cards">
                ${data.content}
            </div>
            <div class="footer">
                <div class="logo"><img src="/logo.png"></div>
                <div class="mentor">Orientação: Prof. Dra. Ana Bocorny</div>
            </div>
        </div>
    </div>
`

export default template