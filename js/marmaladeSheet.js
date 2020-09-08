function sheetView() {

    const character = model.character;
    const stats = model.stats;

    contentDiv.innerHTML = `
    <div id="sheetContent">

        <div id="infoGrid">
            <div id="charInfo"></div>
            <div id="statInfo"></div>
        </div>
        
    </div>`

}