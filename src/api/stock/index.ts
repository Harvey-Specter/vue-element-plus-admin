import { useAxios } from '@/hooks/web/useAxios'
// import { IdType } from '../login/types'
import type { StockData } from './types'

const request = useAxios()

export const getStockListApi = async (params: any): Promise<IResponse> => {
  // const res = await request.get({ url: '/categories/' + id.id + '/stocks?include=user' })
  const res = await request.get({ url: '/categories/' + params.id + '/stocks', params })
  return res && res.data
}

export const saveStockApi = async (data: Partial<StockData>): Promise<IResponse> => {
  const res = await request.post({ url: '/group/save', data })
  return res && res.data
}

export const getStockDetApi = async (id: string): Promise<IResponse<StockData>> => {
  const res = await request.get({ url: '/group/detail', params: { id } })
  return res && res.data
}

// export const delStockListApi = async (ids: string[] | number[]): Promise<IResponse> => {
//   const res = await request.post({ url: '/group/delete', data: { ids } })
//   return res && res.data
// }

export const delStockListApi = async (ids: string[] | number[]): Promise<IResponse> => {
  const idsStr = ids.toString()
  const res = await request.post({ url: '/stocks/del', data: { ids: idsStr } })
  return res && res.data
}

export const getCatesByUserId = async (userId: string): Promise<IResponse> => {
  const res = await request.get({ url: '/categories/getCatesByUserId', params: { userId: userId } })
  return res && res.data
}

export const getCatesByUserIdCode = async (userId: string, code: string): Promise<IResponse> => {
  const res = await request.get({
    url: '/categories/getCatesByUserIdCode',
    params: { userId: userId, code: code }
  })
  return res && res.data
}
