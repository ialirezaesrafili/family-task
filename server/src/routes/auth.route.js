import { Router } from "express";


const router = Router();

router.post('/checking', (req, res) => {
    res.status(200).json({
        message: "successfully reterive",
    })
});

export default router;