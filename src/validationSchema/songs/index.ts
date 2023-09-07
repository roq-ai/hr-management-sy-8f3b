import * as yup from 'yup';

export const songValidationSchema = yup.object().shape({
  title: yup.string().required(),
  artist: yup.string().required(),
  genre: yup.string().nullable(),
  duration: yup.number().integer().nullable(),
  release_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
