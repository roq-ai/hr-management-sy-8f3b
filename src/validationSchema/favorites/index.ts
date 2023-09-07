import * as yup from 'yup';

export const favoritesValidationSchema = yup.object().shape({
  date_added: yup.date().required(),
  song_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
