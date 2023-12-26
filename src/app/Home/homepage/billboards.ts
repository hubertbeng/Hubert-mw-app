import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BillboardsDetails {
    
    getData() {
        return [
            {
                BBName: 'Billboard A',
                BBId: 'BB0001',
                BBAmt: 14,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard B',
                BBId: 'BB0002',
                BBAmt: 1,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard C',
                BBId: 'BB0003',
                BBAmt: 2,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard D',
                BBId: 'BB0004',
                BBAmt: 4,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard E',
                BBId: 'BB0005',
                BBAmt: 2,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard F',
                BBId: 'BB0006',
                BBAmt: 10,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard G',
                BBId: 'BB0007',
                BBAmt: 7,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard H',
                BBId: 'BB0008',
                BBAmt: 3,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard I',
                BBId: 'BB0009',
                BBAmt: 5,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard J',
                BBId: 'BB0010',
                BBAmt: 10,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard K',
                BBId: 'BB001',
                BBAmt: 11,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard L',
                BBId: 'BB0012',
                BBAmt: 16,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard M',
                BBId: 'BB0013',
                BBAmt: 7,
                NetType: 'Digital',
            },
            {
                BBName: 'Billboard N',
                BBId: 'BB0014',
                BBAmt: 9,
                NetType: 'Digital',
            },
        ];
    }

    constructor(private http: HttpClient) {}
    
    getBillboardsMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getBillboardsSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getBillboardsMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getBillboardsLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getBillboardsXLarge() {
        return Promise.resolve(this.getData());
    }

};

export interface Billboards {
    BBName: string;
    BBId: string;
    BBAmt: number;
    NetType: string;
}