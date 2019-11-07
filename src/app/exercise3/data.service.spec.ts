import { DataService } from "./data.service";

describe('DataService', () => {
    let service;

    const http = {
      get: jest.fn() };

    
    const listData =  [ {
        "id": 1,
        "name": "test 1"
    },
    {
      "id": 2,
      "name": "test 2"
    }];

    const stringData = "hello world";

    beforeEach(() => {
      service = new DataService(http as any);
    });
  
    it('Can return list data from API', () => {
        
        http.get.mockReturnValue(listData);
        expect(service.get("test/api/get")).toBe(listData);
    });

    it('Should match snapshot data', () => {
        
        http.get.mockReturnValue(listData);
        expect(service.get("test/api/get")).toMatchSnapshot();
    });


    it('Can return string data', () => {
        
        http.get.mockReturnValue(stringData);
        expect(service.get("test/api/get")).toBe(stringData);
    });


  });

