
import Image from 'next/image';
import { fetchGamebyId } from "../../../../../../../actions/admin/games/actions";
import View from '@/components/crud/view';

export default async function Page(
    {params}:
    {
        params:{id:number}
    
    }
){
    const id= Number(params.id)
    const game= await fetchGamebyId(id);
    return (
        <div className="w-full space-y-12">
          <View game={game}/>
        </div>
    )
}