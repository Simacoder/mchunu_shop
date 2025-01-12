// src/app/components/product-form/product-form.component.ts
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm: FormGroup;
  isEditing: boolean;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.isEditing = !!data;
    this.productForm = this.fb.group({
      title: [data?.title || '', Validators.required],
      price: [data?.price || '', [Validators.required, Validators.min(0)]],
      description: [data?.description || '', Validators.required],
      category: [data?.category || '', Validators.required],
      image: [data?.image || '', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      
      if (this.isEditing) {
        this.productService.updateProduct(this.data.id!, product).subscribe({
          next: () => this.dialogRef.close(true),
          error: (error) => console.error('Error updating product:', error)
        });
      } else {
        this.productService.addProduct(product).subscribe({
          next: () => this.dialogRef.close(true),
          error: (error) => console.error('Error adding product:', error)
        });
      }
    }
  }
}