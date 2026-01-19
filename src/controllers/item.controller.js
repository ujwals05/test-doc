const itemService = require('../services/item.service');
const { successResponse, errorResponse } = require('../utils/response.util');

/**
 * Item Controller
 * Handles incoming HTTP requests and sends responses.
 */
class ItemController {
    async createItem(req, res, next) {
        try {
            const item = await itemService.createItem(req.body);
            successResponse(res, item, 'Item created successfully', 201);
        } catch (error) {
            // Pass to global error middleware if it's not a known logical error, 
            // or handle specific service errors here
            if (error.message === 'Name and Price are required') {
                return errorResponse(res, error.message, 400);
            }
            next(error);
        }
    }

    async getAllItems(req, res, next) {
        try {
            const items = await itemService.getAllItems();
            successResponse(res, items, 'Items retrieved successfully');
        } catch (error) {
            next(error);
        }
    }

    async getItemById(req, res, next) {
        try {
            const item = await itemService.getItemById(req.params.id);
            successResponse(res, item, 'Item retrieved successfully');
        } catch (error) {
            if (error.message === 'Item not found') {
                return errorResponse(res, error.message, 404);
            }
            next(error);
        }
    }

    async updateItem(req, res, next) {
        try {
            const item = await itemService.updateItem(req.params.id, req.body);
            successResponse(res, item, 'Item updated successfully');
        } catch (error) {
            if (error.message === 'Item not found') {
                return errorResponse(res, error.message, 404);
            }
            next(error);
        }
    }

    async deleteItem(req, res, next) {
        try {
            const item = await itemService.deleteItem(req.params.id);
            successResponse(res, item, 'Item deleted successfully');
        } catch (error) {
            if (error.message === 'Item not found') {
                return errorResponse(res, error.message, 404);
            }
            next(error);
        }
    }
}

module.exports = new ItemController();
