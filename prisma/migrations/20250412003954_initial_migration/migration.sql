-- CreateTable
CREATE TABLE "Advogado" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "oab" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "googleCalendarId" TEXT,

    CONSTRAINT "Advogado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Processo" (
    "id" TEXT NOT NULL,
    "numeroProcesso" TEXT NOT NULL,
    "vara" TEXT NOT NULL,
    "tribunal" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Processo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Intimacao" (
    "id" TEXT NOT NULL,
    "processoId" TEXT NOT NULL,
    "advogadoId" TEXT NOT NULL,
    "dataPublicacao" TIMESTAMP(3) NOT NULL,
    "prazo" INTEGER NOT NULL,
    "dataLimite" TIMESTAMP(3) NOT NULL,
    "conteudo" TEXT NOT NULL,
    "resumoIA" TEXT,
    "status" TEXT NOT NULL,
    "googleEventId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Intimacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notificacao" (
    "id" TEXT NOT NULL,
    "intimacaoId" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dataEnvio" TIMESTAMP(3),
    "tentativas" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoogleAuth" (
    "id" TEXT NOT NULL,
    "advogadoId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "scope" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GoogleAuth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExecucaoLog" (
    "id" TEXT NOT NULL,
    "dataExecucao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "qtdIntimacoes" INTEGER NOT NULL DEFAULT 0,
    "qtdProcessada" INTEGER NOT NULL DEFAULT 0,
    "erro" TEXT,
    "advogado" TEXT NOT NULL,
    "dataConsulta" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExecucaoLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feriado" (
    "id" TEXT NOT NULL,
    "siglaTribunal" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feriado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AdvogadoToProcesso" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdvogadoToProcesso_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Advogado_oab_key" ON "Advogado"("oab");

-- CreateIndex
CREATE UNIQUE INDEX "Advogado_email_key" ON "Advogado"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Processo_numeroProcesso_key" ON "Processo"("numeroProcesso");

-- CreateIndex
CREATE UNIQUE INDEX "Intimacao_googleEventId_key" ON "Intimacao"("googleEventId");

-- CreateIndex
CREATE UNIQUE INDEX "GoogleAuth_advogadoId_key" ON "GoogleAuth"("advogadoId");

-- CreateIndex
CREATE INDEX "_AdvogadoToProcesso_B_index" ON "_AdvogadoToProcesso"("B");

-- AddForeignKey
ALTER TABLE "Intimacao" ADD CONSTRAINT "Intimacao_processoId_fkey" FOREIGN KEY ("processoId") REFERENCES "Processo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Intimacao" ADD CONSTRAINT "Intimacao_advogadoId_fkey" FOREIGN KEY ("advogadoId") REFERENCES "Advogado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacao" ADD CONSTRAINT "Notificacao_intimacaoId_fkey" FOREIGN KEY ("intimacaoId") REFERENCES "Intimacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GoogleAuth" ADD CONSTRAINT "GoogleAuth_advogadoId_fkey" FOREIGN KEY ("advogadoId") REFERENCES "Advogado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdvogadoToProcesso" ADD CONSTRAINT "_AdvogadoToProcesso_A_fkey" FOREIGN KEY ("A") REFERENCES "Advogado"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdvogadoToProcesso" ADD CONSTRAINT "_AdvogadoToProcesso_B_fkey" FOREIGN KEY ("B") REFERENCES "Processo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
