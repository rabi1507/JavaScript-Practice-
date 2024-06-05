[
    {
      $match: {
        _id: ObjectId("66322ef60ebbcbc39dd9261a"),
      },
    },
    {
      $project: {
        branches: {
          $map: {
            input: {
              $objectToArray: "$branch",
            },
            as: "branch",
            in: {
              branchId: "$$branch.k",
              warehouses: {
                $map: {
                  input: {
                    $objectToArray:
                      "$$branch.v.warehouse",
                  },
                  as: "w",
                  in: "$$w.v", // Extract the warehouse name
                },
              },
            },
          },
        },
      },
    },
    {
      $unwind: "$branches", // Unwind the branches array
    },
    {
      $unwind: "$branches.warehouses", // Unwind the warehouses array within each branch
    },
    {
      $group: {
        _id: null,
        allWarehouses: {
          $push: "$branches.warehouses",
        }, // Push all warehouse names into a single array
      },
    },
  ]