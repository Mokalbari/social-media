// Ce fichier est là uniquement pour la démonstration.
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  /*
    Prisma se connecte directement au model définis dans prisma/schema.prisma
    Ce modèle reflète parfaitement la base de données (et doit être tenu à jour !)
    Il est possible de faire un query de la db depuis une route API.
    L'autocomplétion fonction grace à la définition préalable du modèle.
    */
  const users = await prisma.user.findMany()

  return NextResponse.json(users)
}
