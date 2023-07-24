import baseUrl from '../data/baseUrlData';
import paths from '../data/pathsData';
import { cars } from '../types/types';

class RequestsServer {
    async getCars(id?: number): Promise<cars[]> {
        const response = id ? await fetch(`${baseUrl}${paths.garage}/${id}`) : await fetch(`${baseUrl}${paths.garage}`);
        const data = await response.json();
        console.log(data);
        return data;
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
