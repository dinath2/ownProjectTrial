function homeView() {
    const character = model.character;
    const stats = model.stats;

    contentDiv.innerHTML = `
    <div id=frontContent">
        <button id="marmaladeButton" onmouseover="this.src='https://i.imgur.com/kb421iL.png'" onmouseout="this.src='https://i.imgur.com/JwZhWa8.png'" onclick="javascript:changePage('sheet')""></button>
    </div>;`

}