import request from 'supertest';
import app from '../src/app';

describe('Test', () => {
    it('GET /', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
    });
});


describe('GET /players', () => {
    it('should return 200 and a list of players', async () => {
        const res = await request(app).get('/players');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message');
        expect(Array.isArray(res.body.players)).toBe(true);
    });
});

describe('GET /players/:id', () => {
    it('should return 200 and the player data if found', async () => {
        const playerId = 17;

        const res = await request(app).get(`/players/${playerId}`);

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch(/player data fetched/i);
        expect(res.body.player).toBeDefined();
        expect(res.body.player.id).toBe(playerId);
    });

    it('should return 404 if player not found', async () => {
        const nonExistentId = 9999;

        const res = await request(app).get(`/players/${nonExistentId}`);

        expect(res.status).toBe(404);
        expect(res.body.message).toMatch(/player not found/i);
    });
});

