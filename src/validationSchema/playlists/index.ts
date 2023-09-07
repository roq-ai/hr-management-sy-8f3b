import * as yup from 'yup';

export const playlistValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  date_created: yup.date().required(),
  last_updated: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
