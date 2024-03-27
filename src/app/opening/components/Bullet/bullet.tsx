type BulletProps = {
    color?: boolean;
}

export default function Bullet({ color = false }: BulletProps) {
    return (
        <div 
        className={`w-3 h-3 rounded-full ${color ? 'bg-verdeFloresta' : 'bg-gray-300'}`}
        />
    )

}