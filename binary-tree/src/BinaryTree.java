public class BinaryTree<T> implements IBinaryTree<T>
{
    private IBinaryTree<T> left;
    
    private IBinaryTree<T> right;
    
    private T data;
    
    BinaryTree
              ( IBinaryTree<T> left,
                IBinaryTree<T> right,
                T data
              )
    {
        this.left = left;
        this.right = right;
        this.data = data;
    }
    
    public IBinaryTree<T> Left()
    {
        return this.left;
    }
    
    public IBinaryTree<T> Right()
    {
        return this.right;
    }
    
    public T Data()
    {
        return this.data;
    }
}
