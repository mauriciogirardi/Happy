import { Response, Request } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';

import Orphanages from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanages);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    return response.json(orphanageView.renderMany(orphanages));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(orphanageView.render(orphanage));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      whatsapp,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanages);

    const requestImage = request.files as Express.Multer.File[];
    const images = requestImage.map(image => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      whatsapp,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const shema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      whatsapp: Yup.string().required().max(11),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await shema.validate(data, {
      abortEarly: false,
    });

    const orphanages = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanages);

    return response.status(201).json(orphanages);
  },
};
