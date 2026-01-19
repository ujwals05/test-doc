const Item = require('../models/item.model');

/**
 * Item Service
 * Handles business logic, calls the Mongoose Model.
 */
class ItemService {
    async createItem(data) {
        if (!data.name || !data.price) {
            throw new Error('Name and Price are required');
        }
        const item = await Item.create(data);
        return item;
    }

    async getAllItems() {
        return await Item.find();
    }

    async getItemById(id) {
        try {
            const item = await Item.findById(id);
            if (!item) {
                throw new Error('Item not found');
            }
            return item;
        } catch (error) {
            if (error.kind === 'ObjectId') {
                throw new Error('Item not found'); // Treat invalid ID as not found
            }
            throw error;
        }
    }

    async updateItem(id, data) {
        try {
            const item = await Item.findByIdAndUpdate(id, data, {
                new: true,
                runValidators: true
            });
            if (!item) {
                throw new Error('Item not found');
            }
            return item;
        } catch (error) {
            if (error.kind === 'ObjectId') {
                throw new Error('Item not found');
            }
            throw error;
        }
    }

    async deleteItem(id) {
        try {
            const item = await Item.findByIdAndDelete(id);
            if (!item) {
                throw new Error('Item not found');
            }
            return item;
        } catch (error) {
            if (error.kind === 'ObjectId') {
                throw new Error('Item not found');
            }
            throw error;
        }
    }
}

module.exports = new ItemService();
