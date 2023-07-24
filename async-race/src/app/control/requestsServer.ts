import baseUrl from '../data/baseUrlData';
import paths from '../data/pathsData';
import { cars } from '../types/types';
import changeData from '../data/changeData';

class RequestsServer {
    async getCars(id?: string, page?: string): Promise<[cars[] | cars, string, string]> {
        const currentPage: string = page || `${changeData.pageCarsNumber}`;
        const response: Response = id
            ? await fetch(`${baseUrl}${paths.garage}/${id}`)
            : await fetch(`${baseUrl}${paths.garage}?_page=${currentPage}&_limit=7`);
        const data: cars[] | cars = await response.json();
        const carsCount = response.headers.get('X-Total-Count') as string;
        console.log(currentPage);
        return [data, carsCount, currentPage];
    }

    async createCar(name: string, color: string): Promise<cars[]> {
        const response = await fetch(`${baseUrl}${paths.garage}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: `${name}`, color: `${color}` }),
        });
        const data = await response.json();
        return [data];
    }

    async updateCar(id: string, name: string, color: string): Promise<void> {
        await fetch(`${baseUrl}${paths.garage}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: `${name}`, color: `${color}` }),
        });
    }

    async deleteCar(id: string): Promise<string> {
        await fetch(`${baseUrl}${paths.garage}/${id}`, {
            method: 'DELETE',
        });
        return id;
    }
}

export default RequestsServer;
