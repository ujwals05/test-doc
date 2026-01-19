const API_URL = '/api/items';

const addItemForm = document.getElementById('addItemForm');
const itemList = document.getElementById('itemList');

// Fetch and display items on load
document.addEventListener('DOMContentLoaded', fetchItems);

// Handle Form Submission
addItemForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price })
        });

        const result = await response.json();

        if (result.success) {
            // Reset form and reload list
            addItemForm.reset();
            fetchItems();
        } else {
            alert('Error adding item: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to connect to server');
    }
});

// Fetch Items Function
async function fetchItems() {
    itemList.innerHTML = '<p class="loading">Loading items...</p>';

    try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (result.success) {
            renderItems(result.data);
        } else {
            itemList.innerHTML = '<p class="error">Failed to load items</p>';
        }
    } catch (error) {
        console.error('Error:', error);
        itemList.innerHTML = '<p class="error">Failed to connect to server</p>';
    }
}

// Render Items to DOM
function renderItems(items) {
    if (items.length === 0) {
        itemList.innerHTML = '<p>No items found. Add one above!</p>';
        return;
    }

    itemList.innerHTML = '';

    items.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'item-row';

        itemRow.innerHTML = `
            <div class="item-info">
                <span class="item-name">${escapeHtml(item.name)}</span>
                <span class="item-meta">ID: ${item.id} | Price: $${escapeHtml(item.price)}</span>
            </div>
            <button class="btn delete-btn" onclick="deleteItem('${item.id}')">Delete</button>
        `;

        itemList.appendChild(itemRow);
    });
}

// Delete Item Function
// needs to be global to be called from onclick attribute
window.deleteItem = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        const result = await response.json();

        if (result.success) {
            fetchItems();
        } else {
            alert('Error deleting item: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to delete item');
    }
};

// Simple XSS prevention utility
function escapeHtml(text) {
    if (!text) return text;
    return text.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
