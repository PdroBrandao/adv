import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.feriado.deleteMany({});

  const feriadosTJMG = [
    { siglaTribunal: "TJMG", data: "2025-01-01T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-01-02T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-01-03T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-01-04T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-01-05T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-01-06T00:00:00Z" },

    { siglaTribunal: "TJMG", data: "2025-03-03T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-03-04T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-03-05T00:00:00Z" },

    { siglaTribunal: "TJMG", data: "2025-04-16T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-04-17T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-04-18T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-04-21T00:00:00Z" },

    { siglaTribunal: "TJMG", data: "2025-05-01T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-05-02T00:00:00Z" },

    { siglaTribunal: "TJMG", data: "2025-09-07T00:00:00Z" },

    { siglaTribunal: "TJMG", data: "2025-10-12T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-10-27T00:00:00Z" },

    { siglaTribunal: "TJMG", data: "2025-11-02T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-11-15T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-11-20T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-11-21T00:00:00Z" },

    { siglaTribunal: "TJMG", data: "2025-12-08T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-20T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-21T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-22T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-23T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-24T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-25T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-26T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-27T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-28T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-29T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-30T00:00:00Z" },
    { siglaTribunal: "TJMG", data: "2025-12-31T00:00:00Z" },
  ];

  const feriadosTRT3 = [
    { siglaTribunal: "TRT3", data: "2025-01-01T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-01-02T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-01-03T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-01-04T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-01-05T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-01-06T00:00:00Z" },

    { siglaTribunal: "TRT3", data: "2025-03-03T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-03-04T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-03-05T00:00:00Z" },

    { siglaTribunal: "TRT3", data: "2025-04-15T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-04-16T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-04-17T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-04-18T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-04-19T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-04-20T00:00:00Z" },

    { siglaTribunal: "TRT3", data: "2025-04-21T00:00:00Z" },

    { siglaTribunal: "TRT3", data: "2025-05-01T00:00:00Z" },

    { siglaTribunal: "TRT3", data: "2025-06-19T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-08-14T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-08-15T00:00:00Z" },

    { siglaTribunal: "TRT3", data: "2025-09-07T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-10-12T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-10-31T00:00:00Z" },

    { siglaTribunal: "TRT3", data: "2025-11-01T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-11-02T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-11-15T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-11-20T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-08T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-20T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-21T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-22T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-23T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-24T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-25T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-26T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-27T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-28T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-29T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-30T00:00:00Z" },
    { siglaTribunal: "TRT3", data: "2025-12-31T00:00:00Z" },
  ];

  await prisma.feriado.createMany({
    data: feriadosTJMG,
  });
  await prisma.feriado.createMany({
    data: feriadosTRT3,
  });

  console.log("Seeds inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
