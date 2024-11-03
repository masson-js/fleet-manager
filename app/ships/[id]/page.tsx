interface ShipParams {
  params: any
}
export default async function Ship({params} : ShipParams) {
  const { id } = await params
  return (
    <h1>Ship{id}</h1>
  )
}