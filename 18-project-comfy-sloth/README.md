## Notes

    const ordered_item_different_colors = Array.from(state.cart.keys()).filter(
      (key) => key.includes(product_id) && key !== cart_item_id
    );
    const product_stock = ;
    let ordered_amount = 0;
    if (ordered_item_different_colors) {
      ordered_amount = ordered_item_different_colors.reduce(
        (total, item_key) => {
          const ordered_item = state.cart.get(item_key);
          total += ordered_item.amount;
          return total;
        },
        0
      );
    }
    const available_amount = product_stock - ordered_amount;
