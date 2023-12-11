// Import the Axios library and the service functions
import axios from 'axios';
import { getAll, search, getAllTags, getAllByTag, getById } from 'src/services/foodService'; // Replace with your actual file path

// Mock the Axios module
jest.mock('axios');

describe('Food Service', () => {

  // Test for getAll function
  describe('getAll', () => {
    it('fetches all food items', async () => {
      const mockData = { data: [{ id: 1, name: 'Pizza' }] };
      axios.get.mockResolvedValue(mockData);

      const data = await getAll();

      expect(axios.get).toHaveBeenCalledWith('/api/foods');
      expect(data).toEqual(mockData.data);
    });
  });

  // Test for search function
  describe('search', () => {
    it('searches food items by term', async () => {
      const searchTerm = 'Pizza';
      const mockData = { data: [{ id: 1, name: 'Pizza' }] };
      axios.get.mockResolvedValue(mockData);

      const data = await search(searchTerm);

      expect(axios.get).toHaveBeenCalledWith(`/api/foods/search/${searchTerm}`);
      expect(data).toEqual(mockData.data);
    });
  });

  // Test for getAllTags function
  describe('getAllTags', () => {
    it('fetches all tags', async () => {
      const mockData = { data: ['Italian', 'Fast Food'] };
      axios.get.mockResolvedValue(mockData);

      const data = await getAllTags();

      expect(axios.get).toHaveBeenCalledWith('/api/foods/tags');
      expect(data).toEqual(mockData.data);
    });
  });

  // Test for getAllByTag function
  describe('getAllByTag', () => {
    it('fetches food items by tag', async () => {
      const tag = 'Italian';
      const mockData = { data: [{ id: 1, name: 'Pizza' }] };
      axios.get.mockResolvedValue(mockData);

      const data = await getAllByTag(tag);

      expect(axios.get).toHaveBeenCalledWith(`/api/foods/tag/${tag}`);
      expect(data).toEqual(mockData.data);
    });

    it('fetches all food items when tag is All', async () => {
      const mockData = { data: [{ id: 1, name: 'Pizza' }] };
      axios.get.mockResolvedValue(mockData);

      const data = await getAllByTag('All');

      expect(axios.get).toHaveBeenCalledWith('/api/foods');
      expect(data).toEqual(mockData.data);
    });
  });

  // Test for getById function
  describe('getById', () => {
    it('fetches a single food item by id', async () => {
      const foodId = 1;
      const mockData = { data: { id: 1, name: 'Pizza' } };
      axios.get.mockResolvedValue(mockData);

      const data = await getById(foodId);

      expect(axios.get).toHaveBeenCalledWith(`/api/foods/${foodId}`);
      expect(data).toEqual(mockData.data);
    });
  });

});
