package com.arindam.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Register {
	@Id
	@Column(length = 15)
private String uname;
	@Column(length = 10)
private String pass;
	@Column(length = 25)
private String nm;
}
