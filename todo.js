// HTML for the up, down, and done buttons
const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';

$(function() {
    $("#addBtn").on("click", addBtnClick);
    
    // Add item if user presses Enter
    $("#newItemText").on("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
});

function addBtnClick() {
    let itemText = $("#newItemText").val().trim();

    // Don't add empty strings
    if (itemText.length !== 0) {
        addItem(itemText);

        // Clear text and put focus back in text input
        $("#newItemText").val("").focus();
    } 
}

function addItem(item) {      
    // Create a new <li> for the list
    let $newItem = $(`<li><span>${item}</span></li>`);
    
    // Up button moves item up one spot
    let $upButton = $(upButtonHtml).on("click", function() {
        let index = $(this.parentElement).index();
        moveItem(index, index - 1); 
    });
    
    // Down button moves item down one spot
    let $downButton = $(downButtonHtml).on("click", function() {
        let index = $(this.parentElement).index();
        moveItem(index, index + 1); 
    });
        
    // Add click hander for done button
    $doneButton = $(doneButtonHtml).on("click", function() {
        // Remove item from list
        let index = $(this.parentElement).index();
        removeItem(index);
    });

    // Complete the function
    // add buttons to li item
    $newItem.append($upButton, $downButton, $doneButton);

    // add li item to ol
    $("ol").append($newItem);

}

function moveItem(fromIndex, toIndex) {
    let $items = $("ol li"); // this gets all list items

    // ignore nonsensical movements
    if (toIndex < 0 || toIndex >= $items.length){
        return;
    }
    
    let $itemToMove = $items.eq(fromIndex).detach();
    // console.log($itemToMove);

    // insert it now at a new position 
    if(toIndex === $items.length - 1){
        // if moving to the encodeURI, use insertAfter method
        $itemToMove.insertAfter($("ol li").eq(toIndex));
    }else if(toIndex < fromIndex) {
        // moving up 
        $itemToMove.insertBefore($("ol li").eq(toIndex));
    } else {
        // moving down 
        $itemToMove.insertAfter($("ol li").eq(toIndex));
    }

}

function removeItem(index) {
    $("ol li").eq(index).remove();
    
}