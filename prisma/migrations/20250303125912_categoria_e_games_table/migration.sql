-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "gameTitle" TEXT NOT NULL,
    "gameDesc" TEXT,
    "gamePrice" DOUBLE PRECISION NOT NULL,
    "gameCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToGames" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToGames_AB_unique" ON "_CategoryToGames"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToGames_B_index" ON "_CategoryToGames"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToGames" ADD CONSTRAINT "_CategoryToGames_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToGames" ADD CONSTRAINT "_CategoryToGames_B_fkey" FOREIGN KEY ("B") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;
