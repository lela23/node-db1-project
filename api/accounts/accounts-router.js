const express = require('express');
const router = express.Router();

const db = require('../../data/dbConfig.js');

router.get('/', async (req, res) => {
	try {
		const accounts  = await db('accounts')
		res.json(accounts)
	} catch (err) {
		next(err)
	}	
})

router.get('/:id', async (req, res, next) => {
	try {
		const account = await db('accounts').where('id', req.params.id).limit(1)
		res.json(account)
	} catch (err) {
		next(err)
	}
})

router.post('/', async (req, res, next) => {

	try {
		const payload = {
			name: req.body.name,
			budget: req.body.budget
		}
		const [accountID] = await db('accounts').insert(payload)
		const account = await db.first('*').from('accounts').where('id', accountID)

		res.status(201).json(account)
	} catch (err) {
		next(err)
	}
})

router.put('/:id', async (req, res, next) => {
 
	try {
		const payload = {
			name: req.body.name,
			budget: req.body.budget
		}
		await db('accounts').update(payload).where('id', req.params.id)
		const account = await db.first('*').from('accounts').where('id', req.params.id)
		res.json(account)
	} catch (err) {
		next(err)
	}
})

router.delete('/:id', async (req, res, next) => {
	try {
		await db('accounts').where('id', req.params.id).del()
		res.status(204).end()
	} catch (err) {
		next(err)
	}
})

module.exports = router;