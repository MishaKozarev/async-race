import baseUrl from '../data/baseUrlData';
import paths from '../data/pathsData';
import { cars, engine, winItem } from '../types/types';
import changeData from '../data/changeData';

class RequestsServer {
    async getCars(id?: string, page?: string): Promise<[cars[] | cars, string, string]> {
        const currentPage: string = page || `${changeData.pageCarsNumber}`;
        const response: Response = id
            ? await fetch(`${baseUrl}${paths.garage}/${id}`)
            : await fetch(`${baseUrl}${paths.garage}?_page=${currentPage}&_limit=7`);
        const data: cars[] | cars = await response.json();
        const carsCount = response.headers.get('X-Total-Count') as string;
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

    async startStopEngine(id: string, status: 'started' | 'stopped'): Promise<engine> {
        const response: Response = await fetch(`${baseUrl}engine?id=${id}&status=${status}`, {
            method: 'PATCH',
        });
        const data: engine = await response.json();
        return data;
    }

    async carRun(id: string): Promise<{ success: boolean }> {
        const response: Response = await fetch(`${baseUrl}engine?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        const data: { success: boolean } = await response.json();
        return data;
    }

    async getWinner(): Promise<winItem[]> {
        const response: Response = await fetch(`${baseUrl}winners/`);
        const data: winItem[] = await response.json();
        return data;
    }
}

export default RequestsServer;
