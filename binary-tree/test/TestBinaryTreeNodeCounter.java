import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TestBinaryTreeNodeCounter
{
    @Test
    void tree_with_1_node_returns_1()
    {
        BinaryTree<Integer> tree = new BinaryTree<>(null, null, 1);
        
        assertEquals(1, BinaryTreeNodeCounter.CountNodes(tree));
    }
    
    @Test
    void tree_with_3_nodes_returns_3()
    {
        BinaryTree<Integer> tree = new BinaryTree<>(
                  new BinaryTree<>(null, null, 2),
                  new BinaryTree<>(null, null, 3),
                  1);
        
        assertEquals(3, BinaryTreeNodeCounter.CountNodes(tree));
    }
}
