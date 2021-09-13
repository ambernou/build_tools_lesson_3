const renderItem = (item) => {
    if (item.type == "img") {
        return `<div class="item_box">
                    <img src="${item.src}" class="img_item">
                    <h3 class="item_header">${item.title}</h3>
                </div>`
    } else if (item.type == "audio") {
        return `<div class="item_box">
                        <audio src="${item.src}" class="audio_item" controls></audio>
                        <h3 class="item_header">${item.title}</h3>
                    </div>`
    } else if (item.type == "video") {
        return `<div class="item_box">
                        <video class="video_item" controls>
                            <source src="${item.src}">
                        </video>
                        <h3 class="item_header">${item.title}</h3>
                    </div>`
    }
};

export const renderPage = (list, el) => {
    const itemsList = list.map(item => renderItem(item));
    el.innerHTML = itemsList.join("");
};