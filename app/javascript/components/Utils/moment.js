import moment from 'moment'
import 'moment/locale/pt-br'
moment.locale('pt-BR')

export const onlyRelative = {
  lastDay: '[Ontem, ]',
  sameDay: '[Hoje, ]',
  nextDay: '[Amanhã, ]',
  lastWeek: 'dddd[, ]',
  nextWeek: 'dddd[, ]',
  sameElse: 'dddd[, ]'
}

export default moment
