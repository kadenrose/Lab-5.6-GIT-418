# Lab-5.6-GIT-418
jQuery to-do List

## Overview

In this lab, you will implement a "to-do" list in jQuery. The user will be able to add new items to the to-do list, click the up (↑) and down (↓) buttons to move items up and down the list, and click the done (✓) button to remove list items.

<img src="https://static-resources.zybooks.com/static/zyLab/todo_list_screenshot.png">

### Step 1: Examine the JavaScript

The given todo.js file implements three functions:

1. ready event handler - Registers addBtnClick() as the click callback function for the Add button and calls addBtnClick() if the user hits Enter while typing a new item.

2. addBtnClick() - Extracts the text typed into the text box and calls addItem() to add the new item.

3. addItem() - Creates a list item for the newly entered item that contains the item text, and creates up, down, and done buttons. Clicking the up and down buttons calls moveItem(), and clicking the done button calls removeItem(). The function is incomplete.

### Step 2: Modify addItem()

Modify addItem() to use the jQuery append() method. First, append `$upButton`, `$downButton`, `$doneButton` to `$newItem` to create a single `<li>` element containing the item text and three buttons. Then append `$newItem` to the item list (`<ol>` element). 

After the modifications are complete, the user should be able to add new items to the end of the list.

### Step 3: Implement moveItem()

Modify moveItem() to move the `<li>` at the given fromIndex to the given toIndex. Ex: `moveItem(0, 1)` should move the first `<li>` (at index 0) to the second `<li>` (at index 1). Use the jQuery methods `detach()`, `insertBefore()`, and `insertAfter()` where appropriate. moveItem() should ignore nonsensical movements, like moving the first item up or the last item down.

After the modifications are complete, the user should be able to click the up button (↑) to move the item up one spot and the down button (↓) to move the item down one spot.

### Step 4: Implement removeItem()

Modify removeItem() to remove the `<li>` at the given index. Ex: `removeItem(2)` should remove the third `<li>` (at index 2). Use the jQuery `remove()` method to remove the appropriate `<li>`.

After the modifications are complete, the user should be able to click the done button (✓) to remove the item from the list.

###### Note: HTML and CSS provided prior
